import { useRouter } from "next/router";

function Doc() {
  const { params = [] } = useRouter().query;
  if (params.length === 3) {
    return (
      <>
        Viewing Docs: <br /> for the feature ({params[0]})<br />
        concept ({params[1]})<br />
        example ({params[2]})
      </>
    );
  } else if (params.length === 2) {
    return (
      <>
        Viewing Docs: <br /> for the feature ({params[0]}) <br />
        concept ({params[1]})
      </>
    );
  } else if (params.length === 1) {
    return (
      <>
        Viewing Docs: <br /> for the feature ({params[0]})
      </>
    );
  } else if (params.length > 3) {
    return <> Did not expected this too many parameters.</>;
  }
  return <> The whole docs page</>;
}

export default Doc;
