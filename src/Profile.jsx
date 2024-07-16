import ProfilePic from "./assets/profile.jpg"
function Profile(){
    const handle= (e)=>e.target.style.display="none";
    return (
        <img onClick={(e)=>handle(e)} src={ProfilePic} id="ProfilePic"></img>

    );
}
export default Profile