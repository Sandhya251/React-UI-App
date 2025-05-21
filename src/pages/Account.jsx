import profile from '../assets/profile.png';


const Account = () => {
  return (
    <div className="card">
      <h2>Account Settings</h2>
      
         <div className="profile">
        <img src={profile} alt="profile" />
        <div>
          <h3>Marry Doe</h3>
          <p>Marry@Gmail.Com</p>
        </div>
      </div>
      <p>Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam</p>
    </div>
  );
};

export default Account;
