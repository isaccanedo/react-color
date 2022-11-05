'use strict' /* eslint import/no-unresolved: 0 */

import React from 'react'
import reactCSS from 'reactcss'

import { Container, Grid } from 'react-basic-layout'
import Docs from 'react-docs'
import Markdown from '../../../modules/react-docs/lib/components/Markdown'

import documentation from '../../documentation'
import { Button, buttonmd, Sketch, sketchmd } from '../../../examples'

class HomeDocumentation extends React.Component {

  render() {
    const styles = reactCSS({
      'default': {
        body: {
          paddingTop: '50px',
          paddingBottom: '50px',
        },
        examples: {
          paddingTop: '30px',
        },
        example: {
          paddingBottom: '40px',
        },
        playground: {
          background: '#ddd',
          boxShadow: 'inset 0 2px 3px rgba(0,0,0,.1)',
          position: 'relative',
          height: '200px',
          borderRadius: '4px 4px 0 0',
        },
        exampleButton: {
          width: '90px',
          height: '24px',
          margin: '-12px 0 0 -45px',
          position: 'absolute',
          left: '50%',
          top: '50%',
        },
        exampleSketch: {
          width: '46px',
          height: '24px',
          margin: '-12px 0 0 -23px',
          position: 'absolute',
          left: '50%',
          top: '50%',
        },
      },
    })

    const bottom = <iframe src="https://ghbtns.com/github-btn.html?user=casesandberg&repo=react-color&type=star&count=true&size=large" scrolling="0" width="160px" height="30px" frameBorder="0"></iframe>

    // return <div></div>;
    return (
      <div style={ styles.body }>
        <Container width={ 780 }>
          <Docs
            markdown={ documentation }
            primaryColor={ this.props.primaryColor }
            bottom={ bottom }
          />
          <Grid>
            <div />
            <div style={ styles.examples }>

              <div style={ styles.example }>
                <div style={ styles.playground }>
                  <div style={ styles.exampleButton }>
                    <Button />
                  </div>
                </div>
                <Markdown>{ buttonmd }</Markdown>
              </div>


              <div style={ styles.example }>
                <div style={ styles.playground }>
                  <div style={ styles.exampleSketch }>
                    <Sketch />
                  </div>
                </div>
                <Markdown>{ sketchmd }</Markdown>
              </div>

            </div>
          </Grid>
        </Container>
      </div>
    )
  }
}

export default HomeDocumentation
