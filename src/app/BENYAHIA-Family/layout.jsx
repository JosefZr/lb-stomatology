// layout.tsx
// import { nunitoSans } from "@/utils/font";
import Back from "./components/Back";

export default function Layout({ children }) {
  return (
    <div 
      // className={`${nunitoSans.className} relative h-fit`}
      >
      <Back />
      {children}
    </div>
  );
}
