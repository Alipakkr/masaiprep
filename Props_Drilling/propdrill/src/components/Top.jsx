import Left from './Left';
import Right from './Right';

function Top({ userName }) {
  return (
    <div className="top-main">
      <h2>Top Main Component</h2>
      <div className="main-container">
        <Left userName={userName} />
        <Right userName={userName} />
      </div>
    </div>
  );
}

export default Top;