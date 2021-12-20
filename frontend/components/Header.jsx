import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, Button, Modal } from 'semantic-ui-react';
import styles from './header.module.css';
import logo from '../public/images/logo/firstmate-name-logo.svg';

/**
 * @function Header
 * @returns {object} Custom component
 * @description Main Layout component header
 */
function Header() {
  const [open, setOpen] = React.useState(false);
  const headerStyles = [
    styles.Menu___bottomBorder,
    styles.Menu__staticPosition,
    styles.Menu__backgroundColor,
  ].join(' ');
  return (
    <Menu as="nav" stackable secondary className={headerStyles}>
      <Menu.Item>
        <Link href="/">
          <a href="next-linting-issue-5533">
            <Image
              src={logo}
              layout="intrinsic"
              width={240}
              height={80}
              alt="logo with home link"
            />
          </a>
        </Link>
      </Menu.Item>
      <Menu.Item>
        <Link href="/#about" passHref>
          <a href="next-linting-issue-5533" className={styles.MenuItem_link__textBlack}>About</a>
        </Link>
      </Menu.Item>
      <Menu.Item>
        <Link href="/#boilerplates" passHref>
          <a href="next-linting-issue-5533" className={styles.MenuItem_link__textBlack}>Boilerplates</a>
        </Link>
      </Menu.Item>
      <Menu.Item>
        <Link href="https://github.com/Duncan-Brain/firstmate" passHref>
          <a href="next-linting-issue-5533" className={styles.MenuItem_link__textBlack}>Docs</a>
        </Link>
      </Menu.Item>
      <Menu.Item>
        <Link href="/#contact" passHref>
          <a href="next-linting-issue-5533" className={styles.MenuItem_link__textBlack}>Contact</a>
        </Link>
      </Menu.Item>
      <Menu.Item position="right">
        <Modal
          onClose={() => setOpen(false)}
          onOpen={() => setOpen(true)}
          open={open}
          trigger={<Button>CONTRIBUTE</Button>}
        >
          <Modal.Header>Thank you for your support!</Modal.Header>
          <Modal.Content image>
            <Image
              src="/images/home-page/helm-stock-photo.jpg"
              layout="intrinsic"
              width={320}
              height={214}
              alt="stock image of captain's helm"
              className={styles.ContributeModal_img__paddingRight}
            />
            <Modal.Description>
              <h3>Got Time?</h3>
              <p>
                We can always use feedback and development work.
                <br />
                Check out &nbsp;
                <a href="https://github.com/Duncan-Brain/firstmate">
                  the main repo
                </a>
                &nbsp; to submit at PR.
              </p>
              <h3>Got Money?</h3>
              <p>
                Email me for cash contributions
                <br />
                &nbsp; &nbsp; or
                <br />
                Ethereum is accepted at this public address:
                <br />
                <a href="https://etherscan.io/address/0x066f13c592E4e1540D53f27844ee15cf0FAD9B96">0x066f13c592E4e1540D53f27844ee15cf0FAD9B96</a>
              </p>
            </Modal.Description>
          </Modal.Content>
          <Modal.Actions>
            <Button
              content="Okay, great thanks"
              labelPosition="right"
              icon="checkmark"
              onClick={() => setOpen(false)}
              positive
            />
          </Modal.Actions>
        </Modal>
      </Menu.Item>
    </Menu>
  );
}

export default Header;
