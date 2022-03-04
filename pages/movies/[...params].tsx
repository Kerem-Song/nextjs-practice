import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import { AppContext } from 'next/app';
import { useRouter } from 'next/router';
import { ParsedUrlQuery } from 'querystring';
import Seo from '../../components/Seo';

export default function Detail({
  params,
}: InferGetServerSidePropsType<GetServerSideProps>) {
  const [title, id] = params;
  console.log('params', params);
  return (
    <div>
      <Seo title={title} />
      <h4>{title}</h4>
    </div>
  );
}

export function getServerSideProps({
  params: { params },
}: InferGetServerSidePropsType<GetServerSideProps>) {
  return {
    props: {
      params,
    },
  };
}
