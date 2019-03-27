import videojs from 'video.js';

const vjsComponent = videojs.getComponent('Button');

class vjsSettingsButton extends vjsComponent {
    constructor(player, options) {
        super(player, options);

        this.controlText('Settings');
        this.addClass('vjs-settings-control');

        // this.setQualityBadge('HD');
    }

    handleClick() {
        this.player().setState({settingsMenuOpened: !this.player().state.settingsMenuOpened});
    }

    setQualityBadge(qualityBadge) {
        const qualityBadgeClass = 'quality-badge';
        const hdBadgeClass = 'hd-badge';
        const fkBadgeClass = 'fk-badge';

        this.removeClass(qualityBadgeClass);
        this.removeClass(fkBadgeClass);
        this.removeClass(hdBadgeClass);

        if (!qualityBadge) {
            return;
        }

        this.addClass(qualityBadgeClass);

        if (qualityBadge === 'HD') {
            this.addClass(hdBadgeClass);
        } else if (qualityBadge === 'FK') {
            this.addClass(fkBadgeClass);
        }
    }
}

videojs.registerComponent('vjsSettingsButton', vjsSettingsButton);

export default vjsSettingsButton;