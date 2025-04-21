/* eslint-disable no-unused-vars */
function Profile(){
    return (
       <div>
        <h1>Profile Card Challenge</h1>
        <ProfileCard
        name="Anjali"
        age={30}
        greeting={
            <div>
                <strong>Hi Anjali, have a greate day!</strong>
            </div>    
        }
        >
            <p>Hobbies: Reading, Hiking</p>
            <button>Contact</button>
        </ProfileCard>

        <ProfileCard
        name="Amrut"
        age={34}
        greeting={
            <div>
                <strong>Hi Amrut, have a great day!</strong>
            </div>    
        }
        >
            <p>Hobbies: Reading, Hiking</p>
            <button>Contact</button>
        </ProfileCard>
        </div>
    )
}

export default Profile;

function ProfileCard(props){
    const{name,age,greeting,children} = props; // destructuring is like this
    return (
        <>
          <h2>Name: {name} </h2>
          <p>Age: {age } </p>
          <p> {greeting} </p>
          <div>
          {children}
          </div>
        </>
    )
}