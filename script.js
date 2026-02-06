const toastContainer = document.getElementById("toast-container")

function showToast(message , type="info"){
    const toast = document.createElement('div')
    toast.className = `toast ${type}`;

    toast.innerHTML = ` 
    ${message}
    <button class="close-btn" onclick="removeToast(this)">&times;</button>

    `
    
    toastContainer.appendChild(toast);
    
    setTimeout(() => {
        toast.classList.add("hide")
        setTimeout(() => 
            toast.remove(),400
        )
    },3000)   

    const progress = document.createElement('div')
    progress.classList.add('progress-bar')
    progress.style.animationDuration = '3000ms';

    toast.appendChild(progress)
   
}

function removeToast(btn){
    const toast = btn.parentElement;
    toast.classList.add("hide")
    setTimeout(() => toast.remove(),400)
}