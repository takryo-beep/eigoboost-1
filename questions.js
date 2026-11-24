// 固定問題集: 11テーマ × (標準10問 + 発展10問) = 220問。
// テーマは問題集の管理用です。学習画面ではレベルだけを選択します。
// 各行は [和文, 英訳のヒント]。IDは公開後に変更・再利用しないでください。
const EIGOBOOST_LEVELS = Object.freeze({
  standard: '標準（英検2級・中堅大）',
  advanced: '発展（英検準1級・難関大）'
});
const EIGOBOOST_GROUPS = [
  {
    id: 'school', theme: '学校生活・教育',
    standard: [
      ['毎日少しずつ英語を勉強することは、試験の直前にまとめて勉強することよりも効果的です。', 'studying a little every day / more effective than / just before an exam'],
      ['授業で分からないことがあれば、間違いを恐れずに先生に質問することが大切です。', 'if there is something you do not understand / without being afraid of making mistakes'],
      ['部活動を通して、私たちは自分と異なる考えを持つ人と協力する方法を学びます。', 'through club activities / learn how to cooperate / people with different opinions'],
      ['図書館で本を読むと、自分が経験したことのない世界について知ることができます。', 'reading books at the library / learn about / have never experienced'],
      ['将来どんな仕事をしたいかを考えるときは、自分が何に興味を持っているかを知ることが役立ちます。', 'when thinking about your future job / be interested in / it helps to'],
      ['一人で問題を解いた後に友人と答えを比べると、自分の間違いに気づきやすくなります。', 'after solving a problem on your own / compare answers / notice your mistakes'],
      ['学校で学ぶことのすべてが、すぐに日常生活で役立つとは限りません。', 'not everything / learn at school / be useful immediately'],
      ['発表の準備を十分にしておけば、多くの人の前でも落ち着いて話すことができます。', 'if you prepare well / stay calm / speak in front of many people'],
      ['友人に勉強を教えることは、自分がその内容を本当に理解しているかを確かめるよい方法です。', 'teaching your friends / a good way to check whether / really understand'],
      ['通学中の短い時間を利用して単語を覚えるようにしたら、以前より英語に自信がつきました。', 'make use of the time / on the way to school / become more confident']
    ],
    advanced: [
      ['教育の目的は知識を与えるだけでなく、未知の問題に自分で向き合う力を育てることにあります。', 'the purpose of education / not merely ... but also / tackle unfamiliar problems independently'],
      ['生徒の能力を一度の試験だけで判断すれば、努力の過程や創造性を見落とすおそれがあります。', 'judge students solely by / a single examination / overlook effort and creativity'],
      ['学ぶ機会が家庭の経済状況に左右される社会では、才能が十分に生かされないままになる可能性があります。', 'access to education / depend on financial circumstances / talent remains undeveloped'],
      ['自分と意見の異なる相手の説明に耳を傾ける経験は、正解を覚えるだけでは得られない学びをもたらします。', 'listen to those who disagree with you / learning that cannot be gained merely by'],
      ['失敗を許さない教室では、生徒は疑問を深めるよりも、教師が期待する答えを探すようになるかもしれません。', 'a classroom where failure is not tolerated / rather than explore questions / expected answers'],
      ['オンライン授業が学習の選択肢を広げた一方で、誰もが静かな学習環境を持つわけではないことも明らかになりました。', 'while online classes have expanded options / reveal that / not everyone has access to'],
      ['学んだ知識を現実の問題と結びつけて初めて、生徒は学習の意義を実感できることがあります。', 'only when / connect knowledge with real-world problems / appreciate the value of learning'],
      ['生徒に選択の自由を与えることは重要ですが、その選択を支える情報と助言も同時に必要です。', 'give students freedom of choice / information and guidance / make informed decisions'],
      ['短期的な成績の向上ばかりを求めると、生涯にわたって学び続ける意欲を損なうことになりかねません。', 'focus exclusively on short-term results / undermine motivation / lifelong learning'],
      ['異なる背景を持つ生徒が共に学ぶ価値は、同じ答えに到達することよりも、多様な考え方に触れることにあります。', 'the value of learning together / lie less in ... than in / diverse perspectives']
    ]
  },
  {
    id: 'health', theme: '日常生活・健康',
    standard: [
      ['健康を保つためには、食事の内容だけでなく、毎日十分に眠ることにも気を配る必要があります。', 'to stay healthy / pay attention not only to ... but also to / get enough sleep'],
      ['忙しい日でも、少し歩く時間を作ると、気分を変えることができます。', 'even on busy days / make time for a short walk / refresh yourself'],
      ['夜遅くまでスマートフォンを使っていると、翌朝早く起きるのが難しくなることがあります。', 'stay up late using a smartphone / find it difficult to get up early'],
      ['食べ物を買う前に冷蔵庫の中を確認すれば、必要以上に買わずに済みます。', 'check what is in the refrigerator / before shopping / avoid buying more than you need'],
      ['ストレスを感じたときに信頼できる人に話すと、気持ちが楽になることがあります。', 'when you feel stressed / talk to someone you trust / feel better'],
      ['新しい習慣を始めるときは、最初から完璧を目指すより、小さな目標を立てる方が続けやすいです。', 'start a new habit / set small goals / rather than aim for perfection'],
      ['家族と一緒に食事をする時間は、その日にあったことを話し合うよい機会です。', 'have meals with your family / an opportunity to / what happened that day'],
      ['自分で料理をするようになってから、食べ物を無駄にしないよう気をつけるようになりました。', 'since I started cooking / become more careful / avoid wasting food'],
      ['休むことを時間の無駄だと思う人もいますが、休憩は集中力を取り戻すのに役立ちます。', 'some people think / a waste of time / regain concentration'],
      ['天気のよい休日には、家の中で過ごす代わりに、近くの公園を散歩してみませんか。', 'on a sunny day off / instead of staying indoors / why not take a walk']
    ],
    advanced: [
      ['健康に関する情報があふれる現代では、自分に合う方法を選ぶために情報源の信頼性を確かめる姿勢が欠かせません。', 'an abundance of health information / assess the reliability of sources / choose what suits you'],
      ['便利さを優先して身体を動かす機会を減らしてきた私たちは、日常生活に運動を取り戻す工夫をする必要があります。', 'prioritize convenience / fewer opportunities for physical activity / incorporate exercise into daily life'],
      ['心身の不調を個人の努力不足だけで説明すると、長時間労働などの社会的な要因が見えなくなってしまいます。', 'attribute poor health solely to / lack of effort / obscure social factors'],
      ['休息に罪悪感を抱くほど忙しい社会では、何もしない時間の価値を見直すことも必要でしょう。', 'feel guilty about resting / reconsider the value of / time spent doing nothing'],
      ['他人と生活習慣を比べ続けるよりも、自分の体調の変化に注意を向ける方が役立つ場合があります。', 'rather than constantly compare / pay attention to changes in / physical condition'],
      ['健康的な食生活を勧めるだけでは不十分であり、誰もが手頃な価格で食材を手に入れられる環境も重要です。', 'it is not enough merely to encourage / access to affordable ingredients / equally important'],
      ['生活のすべてを効率化しようとすると、人との何気ない会話など、数値では測れない豊かさを失うかもしれません。', 'make every aspect of life efficient / lose something valuable / cannot be measured numerically'],
      ['長く続けられる健康習慣とは、厳しい規則に従うことよりも、生活の変化に合わせて無理なく調整できるものです。', 'sustainable healthy habits / not so much ... as / adapt flexibly to changes'],
      ['助けを求めることを弱さとみなさず、自分の限界を理解した上での適切な判断として受け止めるべきです。', 'regard seeking help not as weakness but as / recognize one’s limits / sound judgment'],
      ['将来の健康のために現在の楽しみをすべて我慢するのではなく、両者のバランスを探ることが大切です。', 'rather than sacrifice all present enjoyment / for future health / strike a balance']
    ]
  },
  {
    id: 'environment', theme: '環境・自然',
    standard: [
      ['買い物のたびに自分の袋を持っていくことは、使い捨ての袋を減らす身近な方法です。', 'bring your own bag / every time you shop / reduce disposable bags'],
      ['川や海のごみを減らすためには、町で出るごみの行方にも関心を持つ必要があります。', 'to reduce litter in rivers and oceans / be interested in / where waste ends up'],
      ['使っていない部屋の電気を消すようにすれば、家庭で使う電力を少し減らすことができます。', 'make sure to turn off the lights / unused rooms / reduce electricity use'],
      ['身近な公園で植物を観察すると、季節の変化に気づくことができます。', 'observe plants in a nearby park / notice seasonal changes'],
      ['まだ使える物をすぐに捨てるのではなく、それを必要としている人に譲ることもできます。', 'instead of throwing away things / still usable / give them to someone who needs them'],
      ['環境を守る活動は、一人では小さく見えても、多くの人が続ければ大きな力になります。', 'efforts to protect the environment / may seem small / make a difference together'],
      ['水を出したまま歯を磨かないようにするだけでも、水の無駄を減らせます。', 'even simply avoiding / leave the tap running / while brushing your teeth'],
      ['自然の中で過ごすときは、野生の動物に近づきすぎないように気をつけましょう。', 'when spending time in nature / be careful not to / get too close to wild animals'],
      ['物を買う前に本当に必要かを考えることは、ごみを減らす第一歩になります。', 'think about whether you really need / before buying / the first step toward'],
      ['地域の清掃活動に参加してから、道に落ちている小さなごみにも気づくようになりました。', 'since taking part in a local clean-up / become aware of / litter on the streets']
    ],
    advanced: [
      ['環境問題を将来の世代だけの課題と考える限り、私たち自身の暮らし方を変える必要性は理解されにくいでしょう。', 'as long as / regard environmental issues as / the need to change our own lifestyles'],
      ['環境に優しいとされる製品でも、製造から廃棄までを通して見なければ、その影響を適切に判断することはできません。', 'even products described as environmentally friendly / from production to disposal / assess their impact'],
      ['自然を守る政策を進める際には、その地域で暮らす人々の生活や知識を軽視してはなりません。', 'when implementing conservation policies / must not disregard / local livelihoods and knowledge'],
      ['便利な生活を維持したまま環境への負担だけを減らせるとは限らず、何を大切にするかを問い直す必要があります。', 'not necessarily possible to / maintain convenience / reconsider our priorities'],
      ['個人の心がけを促すだけでなく、環境に配慮した選択がしやすい社会の仕組みを整えることも重要です。', 'not only encourage individual action but also / build systems that make it easier to'],
      ['目先の経済的な利益を優先して森林を失えば、後になってその機能を取り戻すには長い時間がかかります。', 'prioritize immediate economic gain / lose forests / take a long time to restore'],
      ['都市の緑地は単なる景観の一部ではなく、人々が自然とのつながりを保つための貴重な場所でもあります。', 'urban green spaces / more than just scenery / maintain a connection with nature'],
      ['気候変動への対策を公平に進めるには、負担を引き受ける力が人や地域によって異なることを考慮すべきです。', 'address climate change fairly / take into account / different capacities to bear costs'],
      ['自然から得られる利益を価格だけで評価すると、文化的な意味や将来の世代にとっての価値が見落とされるおそれがあります。', 'value the benefits of nature solely in monetary terms / overlook cultural significance / future generations'],
      ['環境問題の規模に圧倒されても、自分にできる行動が無意味だと結論づけるべきではありません。', 'even if overwhelmed by the scale / should not conclude that / individual actions are meaningless']
    ]
  },
  {
    id: 'technology', theme: '科学・テクノロジー',
    standard: [
      ['インターネットで調べた情報を使うときは、誰がいつ発信したものかを確かめましょう。', 'when using information found online / check who published it and when'],
      ['スマートフォンは便利ですが、使う時間を決めておかないと、ほかのことに集中できなくなります。', 'smartphones are useful / unless you set time limits / concentrate on other things'],
      ['新しい道具を使う前に説明を読むことは、時間がかかるように見えても、間違いを防ぐのに役立ちます。', 'read the instructions before / although it may seem time-consuming / prevent mistakes'],
      ['遠くに住む友人とも、オンラインで顔を見ながら話せるようになりました。', 'it has become possible to / see each other while talking online / live far away'],
      ['翻訳アプリを使うときも、相手に何を伝えたいのかを自分で考えることが大切です。', 'even when using a translation app / think for yourself about / what you want to communicate'],
      ['便利なサービスに登録する前に、自分の情報がどのように使われるのかを確認するべきです。', 'before signing up for a service / check how / personal information is used'],
      ['写真をすぐに共有できるからといって、写っている人の許可を取らなくてよいわけではありません。', 'just because ... does not mean / share photos instantly / ask for permission'],
      ['機械が得意な仕事と人間が得意な仕事について考えることは、将来の職業を選ぶ際に役立ちます。', 'tasks machines are good at / help when choosing / a future career'],
      ['画面を見る時間を減らしたところ、寝る前に本を読む時間が増えました。', 'after reducing screen time / have more time to read / before going to bed'],
      ['科学の実験では、予想と違う結果が出ても、その理由を考えることが大切です。', 'in scientific experiments / results differ from expectations / consider the reasons']
    ],
    advanced: [
      ['人工知能がもっともらしい答えを示したとしても、その根拠を検討する責任まで人間が手放してよいわけではありません。', 'even if AI offers a plausible answer / does not mean / give up responsibility for evaluating evidence'],
      ['技術の進歩が社会を豊かにするかどうかは、その技術自体よりも、私たちがそれをどう使うかに左右されます。', 'whether technological progress enriches society / depend less on ... than on / how we use it'],
      ['利用者に合わせた情報ばかりが表示される環境では、自分の見方が社会全体の意見だと思い込みやすくなります。', 'personalized information / be more likely to assume / represent society as a whole'],
      ['効率を高めるために人の行動を数値化する際には、測定しやすいものだけが重視される危険性に注意が必要です。', 'quantify human behavior / improve efficiency / prioritize only what is easy to measure'],
      ['新しい技術を導入する前に、恩恵を受ける人だけでなく、取り残される可能性のある人にも目を向けるべきです。', 'before introducing new technology / those who benefit / those at risk of being left behind'],
      ['便利さと引き換えに個人情報を差し出すことが当たり前になると、何を失っているのかを意識しにくくなります。', 'exchange personal information for convenience / become the norm / less aware of what we lose'],
      ['科学的な知識が更新されることは科学の弱さではなく、新たな証拠に基づいて説明を修正できる強みを示しています。', 'the revision of scientific knowledge / not a weakness but a strength / in light of new evidence'],
      ['すべての判断を自動化すれば公平になるとは限らず、仕組みに組み込まれた偏りを検証し続ける必要があります。', 'automating every decision does not necessarily ensure fairness / examine biases built into systems'],
      ['道具への依存が深まるほど、その道具が使えなくなったときに自分で判断する力の重要性が増すかもしれません。', 'the more dependent we become / the more important / when the tools are unavailable'],
      ['技術が可能にしたことと、社会が実行すべきことを区別して議論する姿勢が求められています。', 'distinguish what technology makes possible from / what society ought to do / discuss critically']
    ]
  },
  {
    id: 'culture', theme: '文化・国際交流',
    standard: [
      ['外国語を学ぶことは、言葉を覚えるだけでなく、異なる文化を知るきっかけにもなります。', 'learning a foreign language / not only memorize words but also / learn about other cultures'],
      ['海外で生活すると、自分の国では当たり前だと思っていた習慣に気づくことがあります。', 'when living abroad / become aware of customs / take for granted'],
      ['相手の国の言葉を少しでも使おうとする姿勢は、交流を始める助けになります。', 'make an effort to use / even a little / help start communication'],
      ['文化が違うからといって、すべての人が同じ考え方をすると思わないことが大切です。', 'differences in culture / do not assume / everyone thinks the same way'],
      ['旅行先で地域の人に話を聞くと、観光案内だけでは分からないことを学べます。', 'talk to local people while traveling / learn things / cannot find in a guidebook'],
      ['外国の友人に自分の町を紹介しようとして、その歴史をあまり知らないことに気づきました。', 'when trying to introduce my town / realize / know little about its history'],
      ['意味が分からない表現に出会ったら、分かったふりをせずに聞き返してみましょう。', 'come across an unfamiliar expression / ask again / instead of pretending to understand'],
      ['音楽や映画を楽しむことが、別の国の言葉を学び始めるきっかけになる場合があります。', 'enjoying music or films / lead someone to / start learning another language'],
      ['自分と違う習慣を見て驚いたときは、その理由を知ろうとすることが大切です。', 'be surprised by unfamiliar customs / try to understand / the reasons behind them'],
      ['国際交流に参加するために、必ずしも遠くの国へ行く必要はありません。', 'do not necessarily have to / travel to a distant country / take part in cultural exchange']
    ],
    advanced: [
      ['異文化を理解するとは、違いを知識として覚えることだけでなく、自分の価値観を問い直すことでもあります。', 'understanding other cultures / not merely learning differences / reexamining one’s own values'],
      ['ある国の文化を一つの特徴で説明しようとすると、その社会の中にある多様性を見失いがちです。', 'describe a culture in terms of a single trait / lose sight of / diversity within society'],
      ['言葉が流暢でなくても、相手の経験を尊重し、理解しようと努める姿勢が信頼につながることがあります。', 'even without fluency / respect another person’s experiences / build trust'],
      ['伝統を守ることは過去をそのまま再現することとは限らず、現代の暮らしの中で意味を見いだすことでもあります。', 'preserving tradition does not necessarily mean / reproduce the past / find meaning in contemporary life'],
      ['文化の違いを理由に対話を諦めるのではなく、互いに共有できる経験から理解の糸口を探るべきです。', 'rather than give up dialogue / seek a starting point for understanding / shared experiences'],
      ['観光が地域の文化を広める一方で、訪れる人の期待に合わせるために文化が単純化されるおそれもあります。', 'while tourism promotes local culture / risk being simplified / meet visitors’ expectations'],
      ['外国語で自分の考えを伝えようとする経験は、母語なら曖昧にしていた前提を意識する機会にもなります。', 'express ideas in a foreign language / become aware of assumptions / leave implicit in one’s native language'],
      ['国境を越えて情報が広がる時代だからこそ、翻訳の過程で失われる背景や文脈にも注意を払う必要があります。', 'precisely because information crosses borders / pay attention to / context lost in translation'],
      ['文化交流の価値は、相手を完全に理解したと感じることよりも、理解しきれない部分があると認めることにあるのかもしれません。', 'the value of cultural exchange / may lie less in ... than in / acknowledge the limits of understanding'],
      ['地域の言葉を残す取り組みは、単に語彙を記録するだけでなく、その言葉を使って生きる場を支える必要があります。', 'efforts to preserve a local language / not just record vocabulary / sustain settings in which it is used']
    ]
  },
  {
    id: 'community', theme: '社会・コミュニティ',
    standard: [
      ['地域の行事に参加すると、普段は話す機会のない人と知り合うことができます。', 'take part in local events / get to know people / rarely have a chance to talk to'],
      ['困っている人を見かけたときは、何が必要かを尋ねてから手伝うことが大切です。', 'when you see someone in trouble / ask what they need / before offering help'],
      ['ボランティア活動では、特別な能力がなくても、自分にできることから始められます。', 'volunteer work / even without special skills / start with what you can do'],
      ['多くの人が使う場所では、自分だけでなく、後から来る人のことも考えて行動しましょう。', 'in public places / consider not only yourself but also / those who come later'],
      ['近所の人と普段からあいさつをしておくことは、いざというときの助け合いにつながります。', 'greet your neighbors regularly / lead to mutual support / in an emergency'],
      ['町のよいところを残すために、若い人の意見を聞く機会を増やすべきだと思います。', 'preserve what is good about our town / create more opportunities to / listen to young people'],
      ['自分には小さな親切でも、それを受けた人にとっては大きな助けになることがあります。', 'even a small act of kindness / can mean a lot to / the person receiving it'],
      ['災害に備えるためには、家族で避難する場所や連絡の取り方を話し合っておく必要があります。', 'prepare for disasters / discuss where to evacuate / how to contact each other'],
      ['地域の店で買い物をすることは、品物を買うだけでなく、町の人と交流する機会にもなります。', 'shopping at local stores / not only buy goods / interact with local people'],
      ['誰もが使いやすい施設を作るには、年齢や身体の状態が異なる人の声を聞くことが役立ちます。', 'make facilities accessible to everyone / listen to people of different ages / physical conditions']
    ],
    advanced: [
      ['地域のつながりを強めるには、参加を当然とみなすのではなく、それぞれの事情に応じた関わり方を認める必要があります。', 'strengthen community ties / rather than take participation for granted / accommodate individual circumstances'],
      ['支援を必要とする人に届く制度にするためには、利用する側が感じる心理的な負担にも目を向けるべきです。', 'ensure support reaches those in need / consider the psychological burden / seeking assistance'],
      ['多数派にとって便利な仕組みが、少数派にとっても公平であるとは限らないことを忘れてはなりません。', 'what is convenient for the majority / not necessarily fair to the minority / must not forget'],
      ['地域の問題を解決する際には、外から成功例を持ち込むだけでなく、その土地に固有の事情を理解することが重要です。', 'solve local problems / not merely import successful examples / understand the local context'],
      ['助ける側と助けられる側を固定して考えると、人は状況に応じて両方の立場になりうることを見落としてしまいます。', 'view helpers and recipients as fixed roles / overlook the fact that / occupy either role'],
      ['人々の意見が対立するときこそ、結論を急ぐより、何を不安に感じているのかを丁寧に聞く姿勢が求められます。', 'especially when opinions conflict / rather than rush to a conclusion / listen carefully to concerns'],
      ['公共の場を誰にとっても開かれたものにするには、明文化された規則だけでなく、見えにくい利用の障壁にも注意が必要です。', 'make public spaces open to everyone / written rules / less visible barriers to access'],
      ['人口が減る地域の将来を考えるとき、人数を増やすことだけを目標にせず、暮らしの質を保つ視点も必要でしょう。', 'consider the future of areas with declining populations / not focus solely on numbers / maintain quality of life'],
      ['ボランティアに頼る仕組みを持続可能にするには、善意を求め続けるのではなく、負担を分かち合う工夫が欠かせません。', 'make volunteer-based systems sustainable / rather than rely indefinitely on goodwill / share the burden'],
      ['社会への信頼は、誰もが常に正しい判断をするという期待よりも、誤りを認めて修正できる仕組みに支えられています。', 'trust in society / rest less on expectations of infallibility than on / acknowledge and correct mistakes']
    ]
  },
  {
    id: "study_methods", theme: "学習法・進路",
    standard: [
      ["去年受けた試験の答案を読み返して、同じ種類の間違いを繰り返していたことに気づきました。", "look over an old exam paper / realize that / make the same kind of mistake"],
      ["辞書を引く前に、前後の文からその単語の意味を推測してみましょう。", "before looking up a word / guess its meaning from the surrounding sentences"],
      ["先生に勧められた本は、思っていたほど難しくありませんでした。", "the book my teacher recommended / not as difficult as I had expected"],
      ["来週までに発表の資料を仕上げるため、私たちは仕事を三つに分けました。", "finish preparing the materials by next week / divide the work into three parts"],
      ["初めてその大学を訪れたとき、学生が自由に使える部屋の多さに驚きました。", "when I first visited / be surprised by how many / be free to use"],
      ["締め切りを忘れないように、課題が出た日に予定表に記入しています。", "so as not to forget / put it on my calendar / the day it is assigned"],
      ["答えが合っていても、なぜその方法で解けるのかを説明できるとは限りません。", "even if the answer is correct / not necessarily be able to explain / why the method works"],
      ["同じ話題について書かれた二つの記事を読むと、扱われている事実の違いが分かります。", "articles on the same topic / see how ... differ / the facts they cover"],
      ["進路を決める前に、その分野で働いている人に一日の仕事について聞いてみたいです。", "before deciding on a career / someone who works in the field / a typical workday"],
      ["時間が足りなければ、全問に答えようとせず、解けそうな問題から始めてください。", "if you are short on time / instead of trying to answer every question / start with"]
    ],
    advanced: [
      ["何度も読み返して覚えたつもりになっても、何も見ずに説明しようとすると理解の穴が見えてきます。", "mistake repeated reading for mastery / explain without referring to anything / reveal gaps in understanding"],
      ["同じ教材を使っても、何を確かめたいかが明確な生徒とそうでない生徒とでは、得られるものが違います。", "even with the same materials / have a clear idea of what to check / get something different out of"],
      ["発表の評価に聞き手からの質問への対応も含めれば、原稿の暗記だけでは測れない力が見えてきます。", "include responses to audience questions in the assessment / reveal skills / memorizing a script"],
      ["選択科目を早く決めさせる利点はあるものの、判断に必要な経験を得る前に選択肢を狭めるおそれもあります。", "although early selection has advantages / narrow students’ options / before gaining the experience needed"],
      ["自分の答案のどこで論理が飛躍したのかを指摘されると、書いた本人には明らかだった前提に気づくことがあります。", "point out a leap in reasoning / become aware of an assumption / seem obvious to the writer"],
      ["習熟度別に教える場合、初回の振り分け以上に、上達した生徒が別のクラスに移れる仕組みが重要です。", "group students by proficiency / more important than initial placement / move to another class as they improve"],
      ["正解が一つに定まらない課題でも、結論をどの根拠から導いたかは評価できます。", "even for tasks with no single correct answer / assess / evidence on which a conclusion is based"],
      ["教員がすぐに助言を与えず、生徒が何につまずいているのかを言葉にするまで待つ方が効果的なこともあります。", "hold back from giving immediate advice / put into words what they are struggling with / can be more effective"],
      ["就職率だけを基準に学部を選ぶと、その数字に表れない学びの価値を見逃しかねません。", "choose a faculty solely on the basis of employment rates / miss the value / not captured by the figures"],
      ["生徒同士で答案を読み合う活動は、評価の基準が具体的に示されてこそ効果を発揮します。", "peer review of written work / be effective only when / assessment criteria are made explicit"]
    ]
  },
  {
    id: "mobility", theme: "交通・旅行",
    standard: [
      ["雨が降り始めたとき、私たちは駅からまだ半分も歩いていませんでした。", "when it began to rain / had not yet walked halfway from the station"],
      ["この切符があれば、今日中はどの駅で降りてもかまいません。", "with this ticket / get off at any station / for the rest of the day"],
      ["バスが遅れたので、予約した時間までにホテルに着けるか心配でした。", "because the bus was late / wonder whether we could get to / in time for our reservation"],
      ["坂を上りきると、左手に海が見えてきます。", "once you reach the top of the hill / come into view / on your left"],
      ["早めに出発していたら、人が増える前に写真を撮れたでしょう。", "if we had left earlier / could have taken pictures / before it got crowded"],
      ["乗り換えにどのくらい時間がかかるか、駅員に尋ねました。", "ask a station employee / how long it takes / change trains"],
      ["大きな荷物は先にホテルに預けてから、街を歩いて回りましょう。", "leave our luggage at the hotel first / explore the city on foot"],
      ["電車から降りるときに、座席に手袋を置き忘れたことに気づきました。", "as I was getting off the train / realize that / leave gloves on the seat"],
      ["この道は少し遠回りですが、車が少ないので自転車でも走りやすいです。", "take you a little out of your way / have less traffic / easy to cycle along"],
      ["駅前の案内所では、その日の夜に泊まれる宿を探すのを手伝ってもらえます。", "at the information desk / get help finding / somewhere to stay that night"]
    ],
    advanced: [
      ["駅にエレベーターがあっても、入口まで段差のない経路が分からなければ、その情報だけでは十分ではありません。", "even if a station has an elevator / a step-free route / that information alone is insufficient"],
      ["最も速い経路を案内するアプリが、初めて訪れる人にも最も分かりやすい経路を示すとは限りません。", "recommend the fastest route / not necessarily show / easiest for first-time visitors to follow"],
      ["運行本数を増やすのが難しければ、乗り継ぎの待ち時間が短くなるよう時刻表を調整するという方法もあります。", "if increasing the frequency of services is difficult / coordinate timetables / shorten transfer waits"],
      ["観光客が特定の場所に集中するのは、その場所が魅力的だからだけでなく、ほかの行き先について知る機会が少ないからでもあります。", "visitors concentrate in certain places / partly because / have little opportunity to learn about other destinations"],
      ["交通量の調査では、車の数だけでなく、その道を横断できずに引き返した人にも目を向けるべきです。", "when studying traffic / pay attention to / turn back because they cannot cross"],
      ["切符の購入をオンラインに限定した結果、窓口の混雑は減りましたが、現地で予定を変える旅行者には利用しづらくなりました。", "sell tickets online only / reduce queues at ticket counters / change plans while traveling"],
      ["地図上では短い距離でも、荷物を持って移動する場合には、階段の数が経路の選択を大きく左右します。", "a short distance on a map / when traveling with luggage / strongly influence the choice of route"],
      ["新しい路線によって通勤の選択肢が広がる一方で、既存の路線を利用してきた人の移動が不便になることもあります。", "while a new route broadens commuting options / make travel less convenient / rely on existing routes"],
      ["自転車道の整備の効果は、全長だけでなく、途切れることなく目的地まで走れるかどうかで測るべきです。", "evaluate cycling infrastructure / not just by total length / ride all the way to a destination without gaps"],
      ["旅先の習慣について事前に知っておくことで、自分には失礼に思える行為にも別の意味があると理解しやすくなります。", "learn about local customs in advance / what seems rude to you / may carry a different meaning"]
    ]
  },
  {
    id: "work_money", theme: "仕事・消費",
    standard: [
      ["欲しい靴が予算を超えていたので、買う前に一晩考えることにしました。", "cost more than I had budgeted / sleep on it before buying"],
      ["この店では、レシートがあれば一週間以内に商品を交換できます。", "if you have the receipt / exchange an item within a week"],
      ["アルバイトを始めてから、約束の時間より早く着くようになりました。", "since starting a part-time job / make a habit of arriving early"],
      ["注文する前に、表示されている料金に送料が含まれているか確かめてください。", "before placing an order / check whether / the listed price includes shipping"],
      ["一人では運べないほど箱が重かったので、同僚に手伝ってもらいました。", "too heavy to carry alone / ask a coworker to help"],
      ["毎月何にお金を使ったかを記録すると、節約できるところが見つけやすくなります。", "keep track of what you spend money on / find ways to save"],
      ["お客様に折り返し電話すると伝えたのに、電話番号を聞くのを忘れました。", "tell a customer I would call back / forget to ask for their number"],
      ["店が閉まるまであと十分しかなかったので、必要なものだけを買いました。", "only ten minutes before the store closed / buy only what I needed"],
      ["次の人がすぐに作業できるように、使った道具は元の場所に戻してください。", "so the next person can get to work right away / put the tools back where they belong"],
      ["長く使えるかどうかを考えると、少し高い方を選ぶことにも理由があります。", "consider how long something will last / it can make sense to choose the slightly more expensive one"]
    ],
    advanced: [
      ["価格の違いを正しく比べるには、購入時の費用に加えて、その後の維持費も見積もる必要があります。", "compare prices accurately / estimate ongoing maintenance costs / in addition to the purchase price"],
      ["失敗を報告した人が責められる職場では、小さな問題が放置され、後で大きな損失につながることがあります。", "blame those who report mistakes / leave minor problems unaddressed / lead to substantial losses"],
      ["売れた数を評価の唯一の基準にすると、顧客に合わない商品を勧める誘因が生まれかねません。", "use sales volume as the sole criterion / create an incentive to / recommend unsuitable products"],
      ["一見割安な定額サービスでも、実際に使う頻度によっては、利用のたびに支払う方が安く済みます。", "an apparently inexpensive subscription / depending on how often you use it / pay per use"],
      ["作業を引き継ぐときは、手順だけでなく、どのような場合にその手順を変えるべきかも伝えることが大切です。", "hand over a task / explain the procedure / under what circumstances it should be changed"],
      ["値引きの期限が迫っていると、買わなければ損だと感じ、本当に必要かどうかを考えなくなることがあります。", "as a discount is about to expire / feel we are missing out / stop asking whether we really need it"],
      ["仕事を速く終えた人に追加の仕事が集中すれば、効率を上げようとする意欲がかえって低下しかねません。", "assign extra work to those who finish quickly / have the unintended effect of / reducing motivation to work efficiently"],
      ["業務の負担を把握するには、目に見える作業時間だけでなく、判断を任されることによる負担も考慮すべきです。", "understand the demands of a job / time spent on visible tasks / burden of being responsible for decisions"],
      ["広告で節約できる額が強調されているときほど、割引前の価格が何を基準に定められたかを確認する価値があります。", "when an ad emphasizes how much you can save / check how the original price was determined"],
      ["柔軟な働き方を認める制度があっても、利用すると昇進に不利になると思われていれば、利用は広がりにくいでしょう。", "allow flexible working arrangements / be seen as hurting promotion prospects / be unlikely to become widely used"]
    ]
  },
  {
    id: "arts_sports", theme: "芸術・スポーツ",
    standard: [
      ["試合に負けて初めて、自分がどれほどそのチームを大切に思っているか分かりました。", "only after losing the match / realize how much the team meant to me"],
      ["映画が始まる前に、携帯電話の電源を切るようにアナウンスがありました。", "before the movie began / an announcement asking people to turn off their phones"],
      ["あの選手が入ってから、チームは以前よりもよく声を掛け合うようになりました。", "since that player joined / communicate with one another more than before"],
      ["美術館は混んでいましたが、その絵の前では立ち止まってゆっくり見ることができました。", "although the museum was crowded / stop in front of the painting / take time to look at it"],
      ["本番では間違えましたが、練習を始めた頃より自信を持って演奏できました。", "make a mistake during the performance / play with more confidence / when I first started practicing"],
      ["天候が悪くなれば、試合は来週の日曜日に延期されます。", "if the weather gets worse / be postponed until next Sunday"],
      ["小説を読み終えてから映画を見ると、結末の描き方の違いがよく分かりました。", "after finishing the novel / see clearly how / the endings were presented differently"],
      ["最初は一曲も弾けませんでしたが、今では友人と一緒に演奏できるようになりました。", "at first I could not play a single piece / now be able to play with friends"],
      ["試合の動画を見せてもらうまで、サーブのときに足を動かしていることに気づきませんでした。", "not realize ... until / be shown a video of the match / move my feet while serving"],
      ["私があの劇をもう一度見たいのは、最後の場面にまだ気になるところがあるからです。", "the reason I want to see the play again / something about the final scene / still wonder about"]
    ],
    advanced: [
      ["勝敗だけでコーチを評価すると、選手が自分で判断する力をどれだけ伸ばしたかが見えにくくなります。", "evaluate coaches solely on wins and losses / make it hard to see / develop players’ ability to make decisions"],
      ["作品について解説を読んだ後で見直すと、最初は偶然だと思った配置に意味があると気づくことがあります。", "look at a work again after reading about it / an arrangement that initially seemed accidental / turn out to be meaningful"],
      ["体格に恵まれた選手が早い時期に結果を出しても、それだけで将来の伸びを予測できるわけではありません。", "physically advantaged athletes / achieve early success / cannot by itself predict future development"],
      ["演奏会の録音なら細部を繰り返し確かめられますが、会場で聴くと、その場の静けさが音の聞こえ方を変えます。", "a recording allows you to revisit details / when listening in the hall / shape how the music sounds"],
      ["選手の出来を数字で示すことはできますが、味方のために空間を作る動きは、その数字に表れにくいものです。", "quantify a player’s performance / movements that create space for teammates / be hard to capture in the numbers"],
      ["古い作品を現代の言葉で上演することには、理解を助ける利点と、原文の響きを失うという代償があります。", "stage an older work in modern language / make it easier to understand / at the cost of losing the sound of the original"],
      ["初心者が長くスポーツを続けられるかどうかは、上達の速さだけでなく、安心して参加できる仲間がいるかにも左右されます。", "whether beginners stay with a sport / depend not only on how quickly they improve / people they feel comfortable joining"],
      ["芸術祭で入場者数の増加を目指すなら、初めて訪れた人が会場内で迷わないようにすることにも意味があります。", "aim to increase attendance at an arts festival / make it easier for first-time visitors / find their way around"],
      ["負けた直後には気づけなかった改善点も、数日後に試合を振り返れば冷静に見つけられることがあります。", "areas for improvement you missed immediately after a defeat / review the match a few days later / identify with a clearer head"],
      ["観客が物語をどう受け取るかは、舞台上で何を見せるかと同じくらい、何を観客の想像に委ねるかにも左右されます。", "how the audience interprets the story / depend as much on what is left to their imagination as on / what is shown onstage"]
    ]
  },
  {
    id: "language_media", theme: "言葉・メディア",
    standard: [
      ["その知らせを聞いたとき、何と言ってよいか分からず、しばらく黙っていました。", "when I heard the news / not know what to say / remain silent for a while"],
      ["会議の場所が変わったことを、まだ誰にも伝えていないのですか。", "have you not told anyone yet / that the meeting venue has changed"],
      ["聞き取れなかった箇所だけ、もう一度ゆっくり言ってもらえますか。", "could you repeat just the part / I did not catch / a little more slowly"],
      ["悪い知らせを伝えるときは、相手が質問できる時間を取っておくようにしています。", "when breaking bad news / make sure to leave time / for the other person to ask questions"],
      ["この記事には専門用語が多いので、まず見出しだけを読んで全体の流れをつかみました。", "contain many technical terms / read only the headings first / get a general sense of"],
      ["手紙を書いているうちに、相手に一番伝えたいことが何か分かってきました。", "as I wrote the letter / come to realize / what I most wanted to tell the other person"],
      ["駅の放送がよく聞こえなかったので、隣にいた人に何と言っていたか尋ねました。", "could not hear the announcement clearly / ask the person next to me / what it said"],
      ["同じ単語でも、どの語と一緒に使うかによって意味が変わることがあります。", "the same word / change in meaning / depending on the words used with it"],
      ["その写真がいつ撮られたものかを確かめてから、友人に送りました。", "check when the photo was taken / before sending it to a friend"],
      ["短いメッセージだけでは誤解されそうだったので、電話で事情を説明しました。", "a short message might be misunderstood / explain the situation over the phone"]
    ],
    advanced: [
      ["訳文を短くしようとして主語を省くと、誰の意見が紹介されているのか曖昧になることがあります。", "omit the subject to shorten a translation / make it unclear / whose opinion is being presented"],
      ["見出しが事実を正しく伝えていても、何を取り上げなかったかによって読者が受ける印象は変わります。", "even if a headline accurately reports the facts / what it leaves out / shape readers’ impressions"],
      ["同じ発言でも、途中の一文だけを切り取れば、話し手が全体として伝えようとした趣旨とは異なって聞こえます。", "quote only one sentence from the middle / sound different from / what the speaker meant to convey overall"],
      ["翻訳の正確さを、原文の語がいくつ訳文に残っているかで判断すると、文章全体の働きを見失いがちです。", "judge a translation by how many original words are retained / tend to lose sight of / what the passage is doing as a whole"],
      ["意見が急に広まったときは、支持者の多さだけでなく、何がきっかけで注目を集めたかを調べる必要があります。", "when an opinion spreads suddenly / not just how many people support it / what drew attention to it"],
      ["話し手の意図を理解するには、使われた言葉に加えて、その場で何が当然とされていたかも知る必要があります。", "understand a speaker’s intentions / in addition to the words used / what was taken for granted"],
      ["説明が平易であれば読む人は増えますが、例外について触れなければ、かえって誤った理解を広めることがあります。", "a clear, simple explanation reaches more readers / fail to mention exceptions / end up spreading a misunderstanding"],
      ["映像に音楽を添えると、同じ出来事を見ていても、視聴者が緊張を感じる場面が変わることがあります。", "add music to footage / even when viewers see the same events / change which moments feel tense"],
      ["議論の双方に同じ長さの発言時間を与えるだけでは、両者の主張が同じ程度に確かな根拠を持つと誤解されかねません。", "give both sides equal speaking time / risk creating the impression that / their claims are equally well supported"],
      ["書き手が読者の疑問を先回りしてすべて説明すると、読者自身が考えて結論にたどり着く余地が狭まることがあります。", "anticipate and answer all the reader’s questions / leave less room for / reach a conclusion independently"]
    ]
  }
];
const EIGOBOOST_QUESTIONS = Object.freeze(EIGOBOOST_GROUPS.flatMap(group =>
  ['standard', 'advanced'].flatMap(level => group[level].map(([japanese, hint], index) => Object.freeze({
    id: `eb-${group.id}-${level}-${String(index + 1).padStart(2, '0')}`,
    level, theme: group.theme, japanese, hint
  })))
));
