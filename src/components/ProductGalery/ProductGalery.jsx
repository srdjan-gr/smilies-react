import React, { useState } from 'react';
import FsLightbox from 'fslightbox-react';

const ProductGalery = ({ productGalery, proizvodId, slika_cela, slika_detalj, slika_cela1, slika_cela2 }) => {

    return (
        <div>
            <FsLightbox
                toggler={productGalery}
                sources={[
                    slika_cela,
                    slika_detalj,
                    slika_cela1,
                    slika_cela2,
                ]}
            />
        </div>
    );
}

export default ProductGalery