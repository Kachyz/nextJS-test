import { promises as fs } from 'fs';
import Post from './components/Post';
import NewPost from './components/NewPost';
import News from './components/News';
import { PostPayload } from './constants/types';

export default async function Page() {
  const file = await fs.readFile(process.cwd() + '/app/__test__/mocks/post_mocks.json', 'utf8');
  const { posts } : { posts: PostPayload[] } = JSON.parse(file);

  return (
    <div className="mainContainer p-10">
      <News data={posts}/>
    </div>
  );
}
