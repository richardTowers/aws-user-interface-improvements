(function () {
  'use strict'

  const usernameMenu = document.getElementById('nav-usernameMenu')
  if (!usernameMenu) { return }

  const span = usernameMenu.querySelector('span[title]')
  if (!span || !span.title) { return }

  const [role, account] = span.title.split(' @ ')
  const cleanRole = role.replace(/\/\d+/, '')
  const cleanAccount = account.replace('-infrastructure', '')
  const textOverride = `${cleanRole} @ ${cleanAccount}`

  const govukColorOverrides = {
    'govuk-production': '#d4351c',
    'govuk-staging': '#f47738',
  }

  const colorOverride = govukColorOverrides[cleanAccount]
  if (colorOverride) {
    usernameMenu.style.backgroundColor = colorOverride
  }
  span.innerText = textOverride

})()

