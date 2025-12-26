// script.js - Chatbot Gen Z An Toàn (Động viên & nhẹ nhàng)
const callNumber = "0336175393";
const helpLink = "https://forms.gle/P3fW4y8oubNKEV638";

// Chuẩn hóa tin nhắn để so khớp từ khóa
function normalizeText(text){
    return text.toLowerCase()
               .normalize("NFD")
               .replace(/[\u0300-\u036f]/g,"")
               .replace(/\s+/g,' ')
               .trim();
}

// Kiểm tra từ khóa
function matchesKeyword(msg, keyword){
    msg = normalizeText(msg);
    keyword = normalizeText(keyword);
    return msg.includes(keyword);
}

// Nhóm câu trả lời
const responseGroups = [
    {
        group: "Bạo lực & bắt nạt",
        keywords: [
            "bị đánh","đánh ở trường","bắt nạt","bị bắt nạt","bị đe dọa","xâm hại",
            "cưỡng hiếp","quấy rối","bạo lực gia đình","bạo lực học đường"
        ],
        replies: [
            "Bạn không phải chịu bạo lực một mình. Hãy chia sẻ ngay với người lớn tin cậy như thầy cô, phụ huynh hoặc cán bộ nhà trường. Bạn rất dũng cảm khi dám lên tiếng, mọi chuyện sẽ ổn dần thôi.",
            "Ghi lại chi tiết sự việc: ai, khi nào, ở đâu, việc gì xảy ra. Điều này giúp người lớn hỗ trợ bạn chính xác. Bạn đang làm tốt khi chủ động bảo vệ mình.",
            "Nếu cảm thấy sợ hãi, hãy rời khỏi nơi nguy hiểm và đi cùng bạn bè hoặc người lớn. Mọi cảm xúc sợ hãi đều bình thường, bạn không cô đơn.",
            "Hãy tập cách nói 'không' và tự bảo vệ bản thân. Không ai có quyền làm hại bạn. Bạn xứng đáng được an toàn và tôn trọng."
        ]
    },
    {
        group: "Tâm lý & áp lực",
        keywords:[
            "sợ hãi","lo lắng","mệt mỏi","căng thẳng","buồn bã","chán nản","lo âu",
            "không muốn đi học","nhật ký","áp lực học tập","khó chịu","bị cô lập",
            "lo lắng về tương lai","áp lực gia đình"
        ],
        replies:[
            "Cảm xúc của bạn rất bình thường, nhiều người cũng trải qua như vậy. Hãy yên tâm, từng bước nhỏ sẽ giúp bạn nhẹ nhõm hơn.",
            "Chia sẻ với người thân hoặc bạn bè đáng tin cậy để cảm thấy nhẹ nhõm hơn. Bạn đang chăm sóc bản thân rất tốt.",
            "Thử tập thở sâu, nghe nhạc, đi dạo hoặc làm việc yêu thích giúp giảm stress. Bạn xứng đáng được bình yên.",
            "Viết ra những lo lắng của bạn, sắp xếp theo mức độ quan trọng để giải quyết từng bước. Bạn đang rất sáng suốt khi tự quản lý cảm xúc.",
            "Nếu cảm thấy quá áp lực, nhấn Trợ giúp ẩn danh hoặc gọi hỗ trợ: 📞 " + callNumber + ". Bạn luôn có người đồng hành."
        ]
    },
    {
        group:"Dậy thì & sinh lý",
        keywords:[
            "dậy thì","ra kinh","có kinh","xuất tinh","chảy máu","mùi cơ thể","có râu","thích","yêu",
            "quan hệ tình dục","nắm tay","bao cao su","bcs","có thai","cưỡng hiếp","xâm hại tình dục"
        ],
        replies:[
            "Dậy thì là giai đoạn bình thường, cơ thể có thể thay đổi nhiều. Hãy giữ vệ sinh và thói quen tốt. Bạn đang lớn lên tự nhiên, hãy tự tin nhé.",
            "Nếu có thắc mắc về cơ thể, hỏi người lớn tin cậy hoặc thầy cô, bác sĩ để được tư vấn chính xác. Bạn không cần lo lắng, kiến thức sẽ giúp bạn an tâm.",
            "Cảm xúc về yêu thích, tình cảm đều bình thường. Tôn trọng bản thân và người khác là quan trọng. Bạn đang học cách yêu thương và tôn trọng.",
            "Nếu có dấu hiệu bất thường như chảy máu nhiều hoặc đau, báo ngay người lớn hoặc bác sĩ. Việc chăm sóc sức khỏe là thông minh và can đảm.",
            "Không quan hệ tình dục khi chưa sẵn sàng. Bảo vệ bản thân luôn quan trọng. Bạn hoàn toàn xứng đáng được an toàn."
        ]
    },
    {
        group:"An toàn giao thông",
        keywords:[
            "mũ bảo hiểm","tai nạn","xe đạp điện","xe máy điện","xe máy","vượt đèn đỏ",
            "phân làn","an toàn giao thông","nguy hiểm giao thông","đường phố"
        ],
        replies:[
            "Luôn đội mũ bảo hiểm khi đi xe máy hoặc xe điện. Bạn đang làm tốt khi chú ý bảo vệ bản thân.",
            "Đi đúng làn đường, không vượt đèn đỏ để bảo vệ bản thân và người khác. Bạn đang học cách đi an toàn.",
            "Nếu gặp tình huống nguy hiểm, dừng xe, quan sát xung quanh và nhờ người lớn hướng dẫn. Mọi việc sẽ ổn nếu bạn bình tĩnh.",
            "Không chạy nhanh hay đi một mình trên đường vắng. Luôn đi cùng bạn bè hoặc người lớn. Bạn đang rất cẩn trọng và thông minh."
        ]
    },
    {
        group:"Gia đình & mối quan hệ",
        keywords:[
            "gia đình","bố mẹ","anh chị em","cãi nhau","sống chung","chia tay","mẹ khó khăn",
            "tức giận","áp lực gia đình","bất đồng","cố gắng","bị bố mẹ đánh","bị phụ huynh làm khó"
        ],
        replies:[
            "Gia đình đôi khi có tranh cãi là bình thường, nhưng hãy cố gắng trò chuyện nhẹ nhàng. Bạn đang trưởng thành và biết cách kiềm chế.",
            "Chia sẻ cảm xúc với người lớn tin cậy giúp bạn được lắng nghe và hướng dẫn. Bạn đang làm tốt khi cởi mở tâm sự.",
            "Nếu căng thẳng trong gia đình, viết nhật ký hoặc trò chuyện với thầy cô sẽ giúp giải tỏa. Bạn xứng đáng được lắng nghe và yêu thương.",
            "Tìm cách tự chăm sóc bản thân và giữ an toàn cảm xúc. Bạn thông minh và mạnh mẽ khi biết chăm sóc chính mình."
        ]
    },
    {
        group:"Nhóm không nhận diện",
        keywords:[""],
        replies:[
            "Mình chưa hiểu câu hỏi. Bạn có thể diễn đạt khác hoặc chi tiết hơn để được hỗ trợ tốt hơn. Bạn đang cố gắng là điều tuyệt vời rồi.",
            "Nếu cần hỗ trợ ngay, bạn có thể gọi 📞 " + callNumber + " hoặc nhấn Trợ giúp ẩn danh 📝 " + helpLink + ". Bạn không đơn độc đâu."
        ]
    }
];

// DOM
const chatBox = document.querySelector(".chat-box");
const input = document.querySelector("#userInput");
const sendBtn = document.querySelector("#sendBtn");

// Append tin nhắn
function appendMessage(sender,text){
    const div = document.createElement("div");
    div.classList.add(sender);
    div.textContent = text;
    chatBox.appendChild(div);
    chatBox.scrollTop = chatBox.scrollHeight;
}

// Lấy câu trả lời
function getResponse(msg){
    const normalized = normalizeText(msg);
    let matchedReplies = [];

    for(const group of responseGroups){
        for(const kw of group.keywords){
            if(kw && matchesKeyword(normalized,kw)){
                matchedReplies.push(...group.replies);
                break;
            }
        }
    }

    if(matchedReplies.length===0){
        matchedReplies = responseGroups[responseGroups.length-1].replies;
    }

    const count = Math.min(2, matchedReplies.length);
    const shuffled = matchedReplies.sort(()=>0.5-Math.random());
    return shuffled.slice(0,count).join("\n\n");
}

// Gửi tin nhắn
function sendMessage(){
    const msg = input.value.trim();
    if(!msg) return;
    appendMessage("user",msg);
    input.value="";
    setTimeout(()=>{
        const reply = getResponse(msg);
        appendMessage("bot",reply);
    },400);
}

// Event
sendBtn.addEventListener("click",sendMessage);
input.addEventListener("keypress",e=>{
    if(e.key==="Enter") sendMessage();
});
