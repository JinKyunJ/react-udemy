import MainNavigation from "../components/MainNavigation";

function ErrorPage() {
  return (
    <>
      <MainNavigation />
      <main>
        <hi>오류가 발생했습니다!</hi>
        <p>페이지를 찾을 수 없습니다!</p>
      </main>
    </>
  );
}

export default ErrorPage;
