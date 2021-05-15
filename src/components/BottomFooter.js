export default function BottomFooter() {
  return (
    <div id="bottom-footer">
      <div className="container">
        <div className="challenger">
          <h2 className="name">
            Challenger:
            <span>
              <strong>
                <a href="https://www.frontendmentor.io/" target="_blank">
                  {' '}
                  Frontend Mentor
                </a>
              </strong>
            </span>
          </h2>
        </div>
        <div className="developer">
          <h2 className="name">
            Developer:
            <strong>
              <a href="http://tousif-ahmed.herokuapp.com/" target="_blank">
                {' '}
                Tousif Ahmed
              </a>
            </strong>
          </h2>
        </div>
      </div>
    </div>
  );
}
