export const EventProps = () => {

    const HandleWelcomeUser = (user) => {
        console.log(`Hey ${user}, Welcome`);
    };

    const HandleHover = () =>{
        console.log(`Hey Welcome`);
    }

    return (
        <>
         <WelcomeUser onClick={() => HandleWelcomeUser("anjali")} 
         onMouseEnter={HandleHover}/>
        </>
    )
}

const WelcomeUser = (props) =>{

    const handleGreeting = () =>{
        console.log(`Hey user`);
        props.onClick();
    }
    return(
        <>
        <button onClick={props.onClick}>Click</button>
        <button onMouseEnter={props.onMouseEnter}>Hover me</button>
        <button onClick={handleGreeting}>Greeting</button>
        </>
    )
}