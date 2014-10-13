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
    if entry['github'] then
      check_uri('https://github.com/' + entry['github'])
    end

    # Check website
    if entry['website'] then
      check_uri(entry['website'])
    end
  end
end

# Check that the URI exists
def check_uri(uri)
  curl = Curl::Easy.new(uri)
  curl.ssl_verify_peer = false
  curl.follow_location = true
  curl.perform

  unless curl.response_code == 200
    raise "#{uri}: #{curl.response_code} response"
  end
end
