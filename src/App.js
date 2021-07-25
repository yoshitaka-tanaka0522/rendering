import { useState, useCallback, useMemo } from "react";
import { ChildArea } from "./ChildArea";
import "./styles.css";

export default function App() {
  const [text, setText] = useState("");
  const [open, setOpen] = useState(false);
  const onClickOpen = () => setOpen(!open);
  const onChangeText = (e) => setText(e.target.value);
  //アロー関数で記載すると、関数が新しく宣言されたものだと判断され
  //child側でpropsが更新されたと判断されてしまう→useCallbackを使用する
  //useCallbackの第二引数にopenを指定するとopenの値が変更されたときにsetOpenを実行する
  //空に設定すると最初に設定した値が変更された時に関数を実行する
  const onClickClose = useCallback(() => setOpen(false), [setOpen]);
  //変数自体のメモ化
  const temp = useMemo(() => 1 + 3, []);
  return (
    <div className="App">
      <input value={text} onChange={onChangeText} />
      <br />
      <br />
      <button onClick={onClickOpen}>表示</button>
      <ChildArea open={open} onClickClose={onClickClose} />
    </div>
  );
}
