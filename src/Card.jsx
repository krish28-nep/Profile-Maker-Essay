import ProfilePic from './assets/profile.jpg'

function Card(){
    return(
        <div className="card">
            <img className="pp" src={ProfilePic} alt="profile-picture"></img>
            <h1 className="card-name">Krish Sitikhu</h1>
            <p className='descrip'>Web Developer and play video games </p>
        </div>
    );
}

export default Card;