import './content.css'
import img from '../assets/round-cross-icon-x-circle-button-sign-stop-delete-cancel-close-symbol-circular-reject-wrong-cancellation-refuse-remove-halt-cannot-restrict-restriction-vector.jpg'

const Content = a =>{
    const {text,id,fun} = a
    const act = ()=>{
        console.log(`content ${text}`)
        fun(id)
    }
    
    return (
        <div className='box'>
            <div className='close'><button className='no' onClick={act}><img src={img} alt="close.jpg" className='size' /></button></div>
             <p>{text}</p>
        </div>
    )
}

export default Content
