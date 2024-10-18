const Images = () => {
  const imageUrl = "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMTc5MDN8MHwxfGFsbHwxfHx8fHx8fHwxNjY2MDEzNDAw&ixlib=rb-4.0.3&q=80&w=1080";
    
    return (
      <div>
        <img src={imageUrl} width={500} height={500} />
      </div>
    );
  }
  
  export default Images;
  