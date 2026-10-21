// api/grade.js
export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
        return res.status(500).json({ error: 'API key is not configured on the server.' });
    }

    const { action, text, japanese, level, category, userTranslation } = req.body;

    try {
        if (action === 'generate') {
            const prompt = `日本の高校・大学入試対策（${level}）の和文英訳問題を作成してください。
            話題ジャンル: ${category}
            要件: 1文で完結する論理的かつ自然な文章（30〜60文字程度）。
            JSON形式で {"japanese": "和文", "hint": "構文・重要語彙ヒント"} のみ出力。`;

            const data = await fetchGeminiText(prompt, apiKey);
            return res.status(200).json(JSON.parse(data));
        }

        if (action === 'grade') {
            if (userTranslation?.length > 500) {
                return res.status(400).json({ error: 'Input too long' });
            }

            const prompt = `あなたは入試英作文指導のプロ講師です。学習者の和文英訳答案を精密に採点・添削してください。
            課題和文: "${japanese}"
            目標レベル: ${level}
            分野: ${category}
            学習者の英訳答案: "${userTranslation}"

            JSON形式で以下を出力:
            {"score": 点数(100点満点), "summary": "講評", "modelAnswers": [{"text":"模範解答1", "type":"洗練された表現"}, {"text":"模範解答2", "type":"手堅い表現"}], "corrections": [{"original":"ミス箇所", "suggestion":"修正案", "explanation":"解説"}], "keyVocab": [{"phrase":"重要単語", "meaning":"意味"}]}`;

            const data = await fetchGeminiText(prompt, apiKey);
            return res.status(200).json(JSON.parse(data));
        }

        if (action === 'tts') {
            const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-tts:generateContent?key=${apiKey}`;
            const payload = {
                contents: [{ parts: [{ text: `Read aloud clearly and naturally in English: ${text}` }] }],
                generationConfig: { responseModalities: ["AUDIO"], speechConfig: { voiceConfig: { prebuiltVoiceConfig: { voiceName: "Puck" } } } }
            };
            const response = await fetch(url, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload) });
            const result = await response.json();
            
            const part = result?.candidates?.[0]?.content?.parts?.[0];
            return res.status(200).json({ audioData: part?.inlineData?.data, mimeType: part?.inlineData?.mimeType });
        }

        return res.status(400).json({ error: 'Invalid action' });

    } catch (error) {
        console.error('API Error:', error);
        return res.status(500).json({ error: 'AI processing failed.' });
    }
}

// 共通テキスト生成関数
async function fetchGeminiText(prompt, apiKey) {
    const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-3-flash-preview:generateContent?key=${apiKey}`;
    const response = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            contents: [{ parts: [{ text: prompt }] }],
            generationConfig: { responseMimeType: "application/json" }
        })
    });
    if (!response.ok) throw new Error(`Gemini API Error: ${response.status}`);
    const result = await response.json();
    return result.candidates[0].content.parts[0].text;
}