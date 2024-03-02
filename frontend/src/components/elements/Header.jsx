import React from 'react';

const Header = () => {
    const stoile = {

    }

    //i oficially hate react what do you MEAN fontSize
    return (
        <>
            <div className="d-flex justify-content-between align-items-stretch">
                <div style={{ fontSize: '2em', fontStyle: 'bold' }}>KraitClub</div>
                <div>
                    [login] [register] [post (grayed out/hidden)] <br/>
                </div>
            </div>
        <br/>
        ------------------------------------------------
        </>
    );
};

export default Header;
