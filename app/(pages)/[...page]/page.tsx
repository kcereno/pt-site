import Link from 'next/link';

const page = () => {
  return (
    <section>
      <div className="text-center container-fluid p-section">
        <h1>Page Not Found</h1>
        <Link
          href="/"
          className="mt-10 btn btn-primary"
        >
          Return Home
        </Link>
      </div>
    </section>
  );
};

export default page;
