import AdList from './AdList'

export default class HomeAds extends AdList
{
    constuctor()
    {
        super();
        this.pagePositions = [
            "ARTICLE_BODY_BOTTOM_FULL_BANNER",
            "ARTICLE_BODY_LEFT_FIRST_RECTANGLE",
            "ARTICLE_BODY_LEFT_SECOND_RECTANGLE",
            "ARTICLE_CONTENT_BOTTOM_FULL_BANNER",
            "HOME_COVER_BOTTOM_FULL_BANNER",
            "HOME_DISCOGRAPHY_BOTTOM_FULL_BANNER",
            "HOME_EVENTS_BOTTOM_FULL_BANNER",
            "HOME_EVENTS_TOP_RIGHT_HALF_BANNER",
            "HOME_NEWS_BOTTOM_LEFT_SMALL_BANNER",
            "HOME_NEWS_BOTTOM_RIGHT_BANNER",
            "HOME_VIDEOS_BOTTOM_LEFT_BANNER",
            "HOME_VIDEOS_BOTTOM_RIGHT_SMALL_BANNER"
        ]
    }
}