const PageTitle = ({ children }, className) => {
    return (
        <div className="w-full items-center flex mt-8 mb-8 ">
            <h2
                className={`font-bold lg:text-[32px] md:text-[24px] text-[20px] text-start`}
            >
                {children}
            </h2>
        </div>
    )
}

export default PageTitle
