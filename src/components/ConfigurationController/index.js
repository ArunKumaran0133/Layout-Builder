import ConfigurationContext from '../../context/ConfigurationContext'
import './index.css'

const ConfigurationController = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {
        showContent,
        showLeftNavbar,
        showRightNavbar,
        onToggleShowContent,
        onToggleShowLeftNavbar,
        onToggleShowRightNavbar,
      } = value

      const onChangeContent = () => {
        onToggleShowContent()
      }

      const onChangeLeftNavbar = event => {
        onToggleShowLeftNavbar(event.target.value)
      }

      const onChangeRightNavbar = event => {
        onToggleShowRightNavbar(event.target.value)
      }
      return (
        <div className="configure-container">
          <h1 className="configure-heading">Layout</h1>
          <div className="input-container">
            <input
              checked={showLeftNavbar}
              type="checkBox"
              className="check-box-input"
              id="leftNavbarInput"
              onChange={onChangeLeftNavbar}
            />
            <label className="input-label" htmlFor="leftNavbarInput">
              Left Navbar
            </label>
          </div>
          <div className="input-container">
            <input
              checked={showContent}
              type="checkBox"
              className="check-box-input"
              id="contentInput"
              onChange={onChangeContent}
            />
            <label className="input-label" htmlFor="contentInput">
              Content
            </label>
          </div>

          <div className="input-container">
            <input
              checked={showRightNavbar}
              type="checkBox"
              className="check-box-input"
              id="rightNavbarInput"
              onChange={onChangeRightNavbar}
            />
            <label className="input-label" htmlFor="rightNavbarInput">
              Right Navbar
            </label>
          </div>
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default ConfigurationController
