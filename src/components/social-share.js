import React from 'react';
import {
    FacebookShareButton,
    LinkedinShareButton,
    TwitterShareButton,
    FacebookIcon,
    LinkedinIcon,
    TwitterIcon,
} from 'react-share';
import '../assets/css/blogArticle.css';

const SocialShare = props => {
    const shareLink = props.shareLink || '';
    const title = props.title || '';

    return (
        <div className="share-socials" style={{display: 'flex'}}>
            <div className="social-item">
                <TwitterShareButton
                    url={ shareLink }
                    title={ title }
                    windowWidth={660}
                    windowHeight={460}>
                    <TwitterIcon
                        className="social-icons"
                        size={36}
                        rectangle="true"
                    />
                </TwitterShareButton>
            </div>
            <div className="social-item">
                <FacebookShareButton
                    url={ shareLink }
                    quote='Facebook'
                    windowWidth={660}
                    windowHeight={460}>
                    <FacebookIcon
                        className="social-icons"
                        size={36}
                        rectangle="true"
                    />
                </FacebookShareButton>
            </div>
            <div className="social-item">
                <LinkedinShareButton
                    url={ shareLink }
                    windowWidth={660}
                    windowHeight={460}>
                    <LinkedinIcon
                        className="social-icons"
                        size={36}
                        rectangle="true"
                    />
                </LinkedinShareButton>
            </div>
        </div>
    );
};
export default SocialShare;
