export const SingleImage = ({brand}) => {
    const { imageSrc, lightImageSrc, altText , link} = brand;
    return (
      <>
        <a
          href={link}
          className="mx-4 flex w-[150px] items-center justify-center py-5 2xl:w-[180px]"
        >
          <img src={imageSrc} alt={altText} className="h-10 w-full dark:hidden" />
          <img
            src={ lightImageSrc}
            alt={altText}
            className="hidden h-10 w-full dark:block"
          />
        </a>
      </>
    );
  };