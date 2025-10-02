import { redirect } from 'next/navigation';

const NotFoundPage = () => {
  redirect('/portfolio');
};

export default NotFoundPage;
