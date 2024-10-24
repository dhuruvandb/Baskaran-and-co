import Loader from "../components/Loader";
import RefreshButton from "../components/RefreshButton";

export default function checkStatus(component, status, loader = <Loader />) {
  if (status === "loading") {
    return loader;
  } else if (status === "successful") {
    return component;
  } else {
    return <RefreshButton />;
  }
}
