import React from 'react';
import { Grid, Icon, Menu, Item } from 'semantic-ui-react';
import styles from './footer.module.css';

/**
 * @function Footer
 * @returns {object} Custom component
 * @description Main Layout component footer
 */
function Footer() {
  const footerClasses = [styles.Footer, styles.Footer___topBorder].join(' ');
  return (
    <div className={footerClasses}>
      <Grid columns={2} className={styles.LastUpdated_grid__padding}>
        <Grid.Column textAlign="left" verticalAlign="middle">
          Website Last Updated Nov 25 2021
        </Grid.Column>
        <Grid.Column textAlign="right" verticalAlign="middle">
          <Item href="https://github.com/Duncan-Brain/firstmate">
            <Icon
              circular
              className={styles.Icon___rmShadow}
              color="black"
              size="big"
              name="github"
            />
          </Item>
        </Grid.Column>
      </Grid>
      <Grid
        stackable
        reversed="mobile"
        columns={3}
        className={styles.Menu__padding}
      >
        <Grid.Column>
          <Menu vertical fluid className={styles.Menu___rmBorder}>
            <Menu.Item>
              <Menu.Header>About Firstmate</Menu.Header>
              <Menu.Menu>
                <Menu.Item>
                  <Icon className={styles.Icon___posLeft} name="envelope" />
                  contact at [thisdomain].ca
                </Menu.Item>
                <Menu.Item>
                  <Icon className={styles.Icon___posLeft} name="life ring" />
                  Come on, Long John. You could captain this ship.
                </Menu.Item>
                <Menu.Item>
                  <Icon className={styles.Icon___posLeft} name="anchor" />
                  That I could, lad. Maybe someday I will.
                </Menu.Item>
              </Menu.Menu>
            </Menu.Item>
          </Menu>
        </Grid.Column>
        <Grid.Column>
          <Menu vertical fluid className={styles.Menu___rmBorder}>
            <Menu.Item>
              <Menu.Header>Developers</Menu.Header>
              <Menu.Menu>
                <Menu.Item>
                  <Icon className={styles.Icon___posLeft} name="github" />
                  <a href="https://github.com/Duncan-Brain/firstmate">Docs</a>
                </Menu.Item>
                <Menu.Item>
                  <Icon className={styles.Icon___posLeft} name="bug" />
                  <a href="https://github.com/Duncan-Brain/firstmate/issues">Issues</a>
                </Menu.Item>
              </Menu.Menu>
            </Menu.Item>
          </Menu>
        </Grid.Column>
        <Grid.Column>
          <Menu vertical fluid className={styles.Menu___rmBorder}>
            <Menu.Item>
              <Menu.Header>Much Love For Open Source</Menu.Header>
              <Menu.Menu>
                <Menu.Item target="_blank">
                  <Icon className={styles.Icon___posLeft} name="pencil" />
                  Vector graphics edited with &nbsp;
                  <a href="https://inkscape.org">Inkscape</a>
                </Menu.Item>
                <Menu.Item target="_blank">
                  <Icon className={styles.Icon___posLeft} name="image" />
                  Stock images from &nbsp;
                  <a href="https://unsplash.com/">unsplash.com</a>
                </Menu.Item>
                <Menu.Item target="_blank">
                  <Icon className={styles.Icon___posLeft} name="university" />
                  Hopefully someday archived by &nbsp;
                  <a href="https://archive.org/">archive.org</a>
                </Menu.Item>
              </Menu.Menu>
            </Menu.Item>
          </Menu>
        </Grid.Column>
      </Grid>
    </div>
  );
}

export default Footer;
