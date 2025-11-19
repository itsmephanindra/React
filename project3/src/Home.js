import FormContent from './FormContent';
import Header from './Header';
import TextContent from './TextContent'
import './Home.css'


function Home(){


    return (

            <>
            <Header/>
            
            <div className='body_content'>
                <TextContent/>
                <FormContent/>
            </div>





            </>

    )
}

export default Home;