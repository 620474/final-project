import {useNavigate} from 'react-router-dom'

export const Page404 = () => {
    const navigate = useNavigate()

    return (
        <div style={{marginLeft:'10px'}}>
            <h1>404Page</h1>
            <p>Redirecting to <span style={{color:'dodgerblue',cursor:'pointer'}} onClick={() => navigate('/')}>Main page</span></p>
        </div>
    )
}
