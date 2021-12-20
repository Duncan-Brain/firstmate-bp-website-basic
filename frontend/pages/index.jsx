import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button, Header, Grid, Card, Icon, Divider } from 'semantic-ui-react';
import Layout from '../components/Layout';
import Banner from '../components/Banner';
import styles from './index.module.css';
import Data from './index.data.json';

/**
 * @function boilerplateCards
 * @returns {object} Multiple card groups components
 * @description Iterates over available boilerplates as listed in Data
 */
function boilerplateCards() {
  const categories = [];
  Data.categories.forEach((category) => {
    const templates = [];
    category.boilerplates.forEach((template) => {
      const status = (template.status === 'concept')
        ? (
          <Card.Content extra>
            <Icon name="minus circle" color="red" />
            Status: Concept - Upvote here:
            <a href="https://github.com/Duncan-Brain/firstmate">Link</a>
          </Card.Content>
        )
        : (
          <Card.Content extra>
            <Icon name="check square" color="green" />
            {template.status}
          </Card.Content>
        );
      templates.push(
        <Card key={template.heading}>
          <Image
            layout="intrinsic"
            width={290}
            height={290}
            src={template.imageSrc}
            alt="This boilerplate stack's respective logos"
          />
          <Card.Content>
            <Card.Header content={template.heading} />
            <Card.Description content={template.description} />
          </Card.Content>
          {status}
        </Card>,
      );
    });
    categories.push(
      <span
        key={`${category.category}Anchor`}
        className={styles.Anchor}
        id={category.category}
      />,
      <Header
        inverted
        key={`${category.category}Header`}
        as="h2"
        content={category.heading}
      />,
      <Card.Group key={category.category} centered>{templates}</Card.Group>,
    );
  });
  return categories;
}

/**
 * @function Index
 * @returns {object} Component
 * @description Home page
 * @todo Improve overall mobile/tablet experience
 */
function Index() {
  const boilerplates = boilerplateCards();
  return (
    <Layout page="home">
      <Banner color="#2d89efff">
        <Grid
          stackable
          verticalAlign="middle"
          columns={2}
          className={styles.Banner_grid}
        >
          <Grid.Row>
            <Grid.Column textAlign="right" width={6}>
              <Image
                priority="true"
                layout="intrinsic"
                width={250}
                height={250}
                src="/images/logo/firstmate-crevat-logo-solid-dark.svg"
                alt="Firstmate crevat logo"
              />
            </Grid.Column>
            <Grid.Column textAlign="left" width={10}>
              <Header inverted as="h1">FULL STACK. FULL CONTROL.</Header>
              <Header inverted as="h2">
                Modern boilerplates for fast deployment.
              </Header>
              <Button href="/#boilerplates">
                Check out the boilerplates
              </Button>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Banner>
      <Banner color="#ffffffff" border="2px">
        <span className={styles.Anchor} id="about" />
        <Header as="h1">
          Setup &nbsp;&#8226;&nbsp; Push &nbsp;&#8226;&nbsp; Deploy
        </Header>
        <p>
          After initial setup the Firstmate framework allows you to simply
          push your image branch.
          Switch to the firstmate controller.
          Then manually press the deploy button.
        </p>
        <div>
          <Image
            layout="intrinsic"
            width={841}
            height={607}
            src="/images/home-page/workflow-diagram-web.svg"
            alt="Firstmate workflow diagram. Shows a push to Dockerhub. Then using Github workflows to deploy to Kubernetes. Kubernetes then retrieves images from Dockerhub and serves it to the browser."
          />
        </div>
      </Banner>
      <Banner>
        <span className={styles.Anchor} id="boilerplates" />
        <Header inverted as="h1">Boilerplates</Header>
        <p className={styles.Banner_p__textColor}>
          <Link href="/#basicWebPage" passHref>
            <a href="next-linting-issue-5533">Basic Web Page</a>
          </Link>
          &nbsp;&nbsp;&#8226;&nbsp;&nbsp;
          <Link href="/#apiWithDatastore" passHref>
            <a href="next-linting-issue-5533">API with Datastore</a>
          </Link>
          &nbsp;&nbsp;&#8226;&nbsp;&nbsp;
          <Link href="/#webAppWithDatastore" passHref>
            <a href="next-linting-issue-5533">Web App with Datastore</a>
          </Link>
          &nbsp;&nbsp;&#8226;&nbsp;&nbsp;
          <Link href="/#dataSciencePipeline" passHref>
            <a href="next-linting-issue-5533">Data Science Pipeline</a>
          </Link>
          &nbsp;&nbsp;&#8226;&nbsp;&nbsp;
          <Link href="/#dappWithNode" passHref>
            <a href="next-linting-issue-5533">
              Decentralized Application with Node
            </a>
          </Link>
        </p>
        {boilerplates}
      </Banner>
      <Banner color="#ffffffff" border="2px">
        <div className={styles.ContactBanner__margin}>
          <span className={styles.Anchor__topIsCustom} id="contact" />
          <Header as="h1">Contact</Header>
          <Divider />
          <br />
          <p>
            <Icon name="envelope" />
            &nbsp;&nbsp;
            contact at [thisdomain].ca
          </p>
          <p>
            <Icon name="github" />
            &nbsp;&nbsp;
            Find us on Github
          </p>
        </div>
      </Banner>
    </Layout>
  );
}

export default Index;
