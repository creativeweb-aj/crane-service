import React from "react";
import { Helmet } from "react-helmet";

const CustomHelmet = () => {

    return (
        <>
            <Helmet>
                <script src="/assets/plugins/jQuery/jquery.min.js"></script>
                <script src="/assets/plugins/bootstrap/bootstrap.min.js" defer></script>
                <script src="/assets/plugins/slick/slick.min.js"></script>
                <script src="/assets/plugins/slick/slick-animation.min.js"></script>
                <script src="/assets/plugins/colorbox/jquery.colorbox.js"></script>
                <script src="/assets/plugins/shuffle/shuffle.min.js" defer></script>
                <script src="/assets/js/script.js"></script>
            </Helmet>
        </>
    )
}

export default CustomHelmet;