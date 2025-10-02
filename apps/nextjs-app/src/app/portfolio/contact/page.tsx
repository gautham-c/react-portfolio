const ContactPage = () => {
  return (
    <div className="space-y-2">
      <p className="text-gray-700">
        Email:{' '}
        <a className="underline" href="mailto:gautham.chadalavada@gmail.com">
          gautham.chadalavada@gmail.com
        </a>
      </p>
      <p className="text-gray-700">Phone: +1-850-825-0636</p>
      <p className="text-gray-700">
        LinkedIn:{' '}
        <a
          className="underline"
          href="https://linkedin.com/in/gautham-c"
          target="_blank"
          rel="noreferrer"
        >
          /in/gautham-c
        </a>
      </p>
      <p className="text-gray-700">
        GitHub:{' '}
        <a
          className="underline"
          href="https://github.com/gautham-c"
          target="_blank"
          rel="noreferrer"
        >
          gautham-c
        </a>
      </p>
    </div>
  );
};

export default ContactPage;
