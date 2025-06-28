import ProjectDetailPage from './client-page';

export default function Page({ params }: { params: { id: string } }) {
  return <ProjectDetailPage id={params.id} />;
}
