function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);

   function onClick () {
      const input = document.querySelector('textarea').value;
      let arr = input.split($`/"[|]"|"," /`);
      console.log(arr);
   }
}