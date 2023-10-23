function NoteItem({ guid }) {
  
    // if (<Ns></Ns>.important) {
    //   return <li>{Ns.content}*</li>;
    // }
    // const { guid } = props;
    return <li>{guid.important ? guid.content + "*": guid.content }</li>;
  }
  
  export default NoteItem;