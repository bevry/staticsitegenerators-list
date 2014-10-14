require 'yaml'
require 'curb'

task default: %w[test]

task :test do
  # Load all entries
  entries = YAML.load_file('list.yaml')
  puts "#{entries.length} entries, syntax probably OK"

  # Check every entry
  entries.each do |entry|
    # Check name
    if entry['name'] then
      puts "Checking #{entry['name']}..."
    else
      raise 'Missing required "name" field.'
    end

    # Check github
    check_uri('https://github.com/' + entry['github']) if entry['github']

    # Check website
    check_uri entry['website'] if entry['website']

    # Check license
    check_license entry['license'] if entry['license']
  end
end

# Check that the URI returns a 200
def check_uri(uri)
  curl = Curl::Easy.new(uri)
  curl.ssl_verify_peer = false
  curl.follow_location = true
  curl.headers['User-Agent'] = 'static-site-generator-comparison-0.1.0.0'
  curl.headers['Accept'] = 'text/html,application/xhtml+xml,application/xml'
  curl.perform

  unless curl.response_code == 200
    raise "#{uri}: #{curl.response_code} response"
  end
end

# Check license
def check_license(license)
  known_licenses = [
    "MIT", "BSD", "GPL", "Public", "MS-PL", "SimPL", "Apache", "Ruby", "Perl",
    "EPL", "CC", "Beer-ware", "Commercial", "ISC", false
  ]

  unless known_licenses.include? license
    raise "Unknown license: #{license}"
  end
end
