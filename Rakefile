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
    check_uri('https://github.com/' + entry['github'], 1) if entry['github']

    # Check website
    if entry['website'] != "" then
      check_uri(entry['website'], 1) if entry['website']
    end

    # Check license
    check_license(entry['license']) if entry['license']

    # Check language
    check_language(entry['language']) if entry['language']
  end
end

# Check that the URI returns a 200
def check_uri(uri, attempt)
  curl = Curl::Easy.new(uri)
  curl.ssl_verify_peer = false
  curl.follow_location = true
  curl.headers['User-Agent'] = 'static-site-generator-comparison-0.1.0.0'
  curl.headers['Accept'] = 'text/html,application/xhtml+xml,application/xml'
  begin
    curl.perform
  rescue Exception => e
    puts "#{uri}: failed to curl"
    if attempt >= 3
      puts "#{uri}: tried #{attempt} times, giving up"
      raise e
    else
      puts "#{uri}: tried #{attempt} times, trying again"
      check_uri(uri, attempt + 1)
    end
  end

  unless curl.response_code == 200
    raise "#{uri}: #{curl.response_code} response"
  end
end

# Check license
def check_license(license)
  known_licenses = [
    "MIT", "BSD", "LGPL", "GPL", "Public", "MS-PL", "MPL", "SimPL", "Apache", "Ruby", "Perl",
    "EPL", "CC", "Beer-ware", "Commercial", "ISC", false
  ]

  unless known_licenses.include? license
    raise "Unknown license: #{license}"
  end
end

# Check language
def check_language(language)
  known_languages = [
    "App",
    "Awk",
    "Batch",
    "C",
    "C#",
    "C++",
    "Clojure",
    "CoffeeScript",
    "Common Lisp",
    "Dart",
    "Elixir",
    "Emacs Lisp",
    "Erlang",
    "F#",
    "Fortran",
    "Go",
    "Groovy",
    "Haskell",
    "Java",
    "JavaScript",
    "Lisp",
    "Lua",
    "Make",
    "newLISP",
    "Nimrod",
    "OCaml",
    "Objective-C",
    "PHP",
    "Perl",
    "Python",
    "Racket",
    "REXX",
    "Ruby",
    "Rust",
    "Scala",
    "Shell",
    "Tcl",
    "Web"
  ]

  unless known_languages.include? language
    raise "Unknown language: #{language}"
  end
end
