

const camelize= (str)=>{
    return str.toLowerCase().replace(/[^a-zA-Z0-9]+(.)/g, function(match, chr)
    {
        return chr.toUpperCase();
    });
  }
const getPendingTasks=(notes)=>{
    var count= notes.filter(note=>note.status==="NEW").length;
    return count;
}
  export {camelize,getPendingTasks};