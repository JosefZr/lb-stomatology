import Back from "../BENYAHIA-Family/components/Back";

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
    