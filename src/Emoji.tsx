import "./Emoji.css";

const  EMOJI_MAP = new Map<string,
string>([
    ["happy","😄"],
    ["sick","🤢"],
    ["dead","💀"],

])



export default function Emoji() {
    let status:EMOJI_KEYS = "sick";

    function happyClick(){
        console.log("Status: ", status);
        console.log("Happy!!");
        status = "happy";
}
 
        return (
        <>
        <div className="emoji">
            {EMOJI_MAP.get("sick") || "🫥"}
        </div>
        <div className="acoes">
            <button onClick={happyClick}>Happy</button>
        </div>
        </>
    )
}