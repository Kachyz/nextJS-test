
import BackArrow from './components/BackArrow';
import UpdateButtons from './components/UpdateButtons';
 
export default function Page() {
  return (
      <div className="mainContainer">
        <BackArrow />

        <img 
          className="rounded-full w-60 justify-self-center"
          src="https://brsc.sa.edu.au/wp-content/uploads/2018/09/placeholder-profile-sq.jpg"
        />
        <table id="userInfo" className="table w-60 justify-self-center mt-5 mb-5">
          <tbody>
            <tr>
              <td>Name:</td>
              <td>Carlos Estrada</td>
            </tr>
            <tr>
              <td>Display name:</td>
              <td>c-estrada</td>
            </tr>
            <tr>
              <td>Friends:</td>
              <td>123</td>
            </tr>
          </tbody>
        </table>

        <UpdateButtons />
      </div>
  );
}
