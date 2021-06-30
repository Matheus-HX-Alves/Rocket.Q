export default function Modal(event){

    const cancelModel = document.querySelector('#modal-buttons .cancel-modal')

    cancelModel.addEventListener("click", close)

    const modalWrapper = document.querySelector('.modal-wrapper')
    
    function open(){
        modalWrapper.classList.add("active"); 
    };

    function close(){
        modalWrapper.classList.remove("active");
    };

    return{
        open,
        close
    }
    
}



