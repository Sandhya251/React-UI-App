import { useNavigate } from 'react-router-dom';

const Welcome = () => {
  const navigate = useNavigate();
  return (
    <div className="card">
      <h2>Welcome to PopX</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
      <button className="primary" onClick={() => navigate('/signup')}>Create Account</button>
      <button className="secondary" onClick={() => navigate('/login')}>Already Registered? Login</button>
    </div>
  );
};

export default Welcome;
