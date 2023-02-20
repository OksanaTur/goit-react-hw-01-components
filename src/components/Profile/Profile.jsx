import user from '../Profile/user.json';
import { Description } from './Description/Description';
import { Layout } from './Layout';
import { Stats } from './Stats/Stats';

export const Profile = () => {
  return <Layout>
    <Description
      username={user.username}
  tag={user.tag}
  location={user.location}
  avatar={user.avatar}
    />
    <Stats stats={user.stats} />
  </Layout>
}