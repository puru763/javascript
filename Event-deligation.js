const handleIconClick = (event) => {
    const iconType = event.target.dataset.iconType;
  
    switch (iconType) {
        case 'linkedin':
            window.location.assign('https://www.linkedin.com/in/purvesh15/');
            break;
        case 'github':
            window.location.assign('https://github.com/puru763');
            break;
        case 'instagram':
            window.location.assign('https://www.instagram.com/puru_763');
            break;
        default:
            break;
    }
};

<div className="media-links" onClick={handleIconClick}>
    <GrLinkedin className="icon" data-icon-type="linkedin" />
    <BsGithub className="icon" data-icon-type="github" />
    <BsInstagram className="icon" data-icon-type="instagram" />
</div>
